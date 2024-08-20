import '@/styles/member-page.css';


export const runtime = 'edge';
export default async function MemberLayout({ 
    children
} : {
    children: React.ReactNode
}) {
    return (
        <div>
            {children}
        </div>
    )
}
