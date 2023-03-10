
export interface ProfileCard {
    name: string

}
export interface badge {
    name: string

}


interface Badge {
}

const mockBadgeData: Badge[] = [
    {
        label: "Gold",
        emoji: "🥇",
    },
    {
        label: "Silver",
        emoji: "🥈",
    },
    {
        label: "Bronze",
        emoji: "🥉",
    },
    {
        label: "Bronze",
        emoji: "🥉",
    },
];

class ProfileCardProps {
}

const mockProfileCardData: ProfileCardProps = {
    imageUrl: "https://picsum.photos/200/200",
    imageAlt: "Profile Picture",
    badges: mockBadgeData,
};