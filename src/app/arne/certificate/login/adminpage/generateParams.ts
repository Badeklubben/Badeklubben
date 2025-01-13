import {Volunteer} from '../../util/Volunteer'


export const generateParams = (formData: Volunteer): string => {
    const {id, personName, groupName, startDate, endDate, role, extraRole} = formData;
    let params = `${id}_${personName}_${groupName}_${startDate}_${endDate}_${role}`;
    if (extraRole && extraRole.length > 0) {
        const extraRolesParams = extraRole.map((role) => {
            return `${role.groupName}_${role.startDate}_${role.endDate}_${role.role}`;
        }).join('_');
        params += `_${extraRolesParams}`;
    }
    return params;
};