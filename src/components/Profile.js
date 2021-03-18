import React from 'react';

const profileData = {
    ckwlghks12: {
        name: '차지환',
        description: '취준생',
    },
    homer: {
        name: '호머 심슨',
        description: '캐릭터',
    },
};
function Profile({ match }) {
    const { username } = match.params;
    const profile = profileData[username];

    if (!profile) return <div>존재하지않음</div>;
    return (
        <div>
            <h3>
                {username} ({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    );
}

export default Profile;
