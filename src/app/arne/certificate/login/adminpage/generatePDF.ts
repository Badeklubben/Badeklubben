import {Volunteer} from '../../util/Volunteer'
import {barcodes, image, text} from '@pdfme/schemas';
import {generate} from '@pdfme/generator';
import {customTemplate} from '../../pdfnfo/customTemplate';
import {generateParams} from "@/app/arne/certificate/login/adminpage/generateParams";
import {generic_echo, undergrupper} from "@/app/arne/certificate/pdfnfo/echoInfo";
import {signaturePerson1, signaturePerson2} from "@/app/arne/certificate/pdfnfo/signatureInfo";

const getPdfInput = (volunteer: Volunteer) => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    const name = volunteer.personName;
    const prefix = "localhost:3000/arne/certificate/verify"
    const fullURL = `${prefix}?${generateParams(volunteer)}`;
    console.log(fullURL)
    const getVervText = (index: number) => {
        if (volunteer.extraRole && volunteer.extraRole.length > index) {
            const role = volunteer.extraRole[index];
            if (role.role && role.groupName && role.startDate && role.endDate) {
                return `${name} har og hatt en stilling som ${role.role} i ${role.groupName} fra ${role.startDate} til ${role.endDate}`;
            }
        }
        return '';
    };

    return [{
        signature_date: dd + '.' + mm + '.' + yyyy,
        student_name_date: `Attest til ${name}`,
        student_role: `${name} har vært ${volunteer.role} i ${volunteer.groupName} fra ${volunteer.startDate} til ${volunteer.endDate}`,
        group_info: undergrupper[volunteer.groupName],
        echo_info: generic_echo,
        verv_1: getVervText(0),
        verv_2: getVervText(1),
        verv_3: getVervText(2),
        signature_photo_1: signaturePerson1.photo,
        signature_photo_2: signaturePerson2.photo,
        signature_name_1: signaturePerson1.name,
        signature_name_2: signaturePerson2.name,
        signature_role_1: signaturePerson1.role,
        signature_role_2: signaturePerson2.role,
        signature_phone_1: signaturePerson1.phone,
        signature_phone_2: signaturePerson2.phone,
        qr_code: `${fullURL}`,
    }
    ]
}

export const generatePDF = async (volunteer: Volunteer) => {
    const pdfInput = getPdfInput(volunteer);
    try {
        const pdf = await generate({
            template: customTemplate,
            inputs: pdfInput,
            plugins: {
                text,
                image,
                qrcode: barcodes.qrcode,
            },
        });

        const buffer = new Uint8Array(pdf.buffer);
        const blob = new Blob([buffer], {type: 'application/pdf'});

        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${volunteer.personName}_attest.pdf`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error('Feil ved generering av PDF:', error);
    }
};