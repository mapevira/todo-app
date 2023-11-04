const person = {
    name: 'Ranga Karanam',
    address: {
        line1: '123 Baker Street',
        city: 'London',
        country: 'UK'
    },
    profiles: ['twiter', 'linkedin', 'instagram'],
    printProfile: () => {
        person.profiles.map(
            profile => console.log(profile)
        )
    }
}

export default function LearningJavaScript() {
    return (
        <>
            <div>{person.name}</div>
            <div>{person.address.line1}</div>
            <div>{person.profiles[0]}</div>
            <div>{ person.printProfile() }</div>
        </>
    )
}