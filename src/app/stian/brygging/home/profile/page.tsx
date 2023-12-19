import { useAuth } from '../../lib/authentication';

export default function Profile() {

    const { user } = useAuth();

    

    return (
        <div>
            Profile
        </div>
    )
}