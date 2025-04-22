import '@/styles/member-page.css';

export default function MemberLayout({ 
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
