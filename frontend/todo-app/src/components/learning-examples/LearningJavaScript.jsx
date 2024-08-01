const person  = {
    name: 'Soojin',
    address: {
        line1: 'Dongjak-gu',
        city: 'Seoul',
        country: 'Korea',
    },
    profiles: ['twitter', 'instagram', 'naver blog'],
    printProfile: () => {
        person.profiles.map(
            profile => console.log(profile)
        )
    }
}


export default function LearningJavaScript (){
    return(
        <>
        <div>{person.name}</div>
        <div>{person.address.line1}</div>
        <div>{person.profiles[0]}</div>
        <div>{person.printProfile()}</div>
        </>
    )
}