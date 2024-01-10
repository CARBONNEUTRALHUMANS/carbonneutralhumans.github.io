export type Tree = {
    dayPlanted: Date;
    genericType: string;
    biologicalType: string;
    location:string;
    height: number;
    notFound?: boolean
}
export type User = {
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    birthday:Date;
    gender:string;
    trees : Tree[];
    aadharNumber: number;
}
export const data: User[] = [
    {
        firstName: "Rajesh",
        lastName: "Kumawat",
        age:18,
        birthday: new Date("2001-3-2"),
        gender: "MALE",
        email: "rajesh121@gmail.com",
        aadharNumber:Math.floor(Math.random() * 10 ** 12),
        trees: [
            {
                biologicalType: "Peepal",
                dayPlanted: new Date("2002-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                // 35.37
                height: Math.floor(Math.random() * 5000) / 100
            },
            {
                biologicalType: "Maple",
                dayPlanted: new Date("2016-2-4"),
                genericType: "Acer",
                location: "St. Paul HS",
                height: Math.floor(Math.random() * 5000) / 100

            },            {
                biologicalType: "Willow",
                dayPlanted: new Date("2019-2-4"),
                genericType: "Salix",
                location: "St. Paul HS",
                height: Math.floor(Math.random() * 5000) / 100
            },            {
                biologicalType: "Oak",
                dayPlanted: new Date("2015-2-4"),
                genericType: "Quercus",
                location: "St. Paul HS",
                height: Math.floor(Math.random() * 5000) / 100
            },         {
                biologicalType: "Peepal",
                dayPlanted: new Date("2020-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height: 24,
                notFound: true
            },
            
        ],
    },
    {
        firstName: "Bhupendra",
        lastName: "Jogi",
        email: "bhupendra2@gmail.com",
        gender: "FEMALE",
        birthday: new Date("2001-3-2"),
        aadharNumber:Math.floor(Math.random() * 10 ** 12),

        age:12,
        trees: [
            {
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },
            {
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2002-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            },{
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height:39
            }
        ],
    }
]

export const firstNames = data.map(user => user.firstName);
