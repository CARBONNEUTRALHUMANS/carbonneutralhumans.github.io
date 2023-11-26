export type Tree = {
    dayPlanted: Date;
    genericType: string;
    biologicalType: string;
    location:string;
    height: number;
}
export type User = {
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    birthday:Date;
    gender:string;
    trees : Tree[]
}
export const data: User[] = [
    {
        firstName: "Rajesh",
        lastName: "Kumawat",
        age:10,
        birthday: new Date("2012-3-2"),
        gender: "MALE",
        email: "rajesh121@gmail.com",
        trees: [
            {
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height: 22
            },
            {
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height: 22
            },            {
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height: 22
            },            {
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height: 22
            },         {
                biologicalType: "Peepal",
                dayPlanted: new Date("2018-2-4"),
                genericType: "Ficus religiosa",
                location: "St. Paul HS",
                height: 22
            },
            
        ],
    },
    {
        firstName: "Bhupendra",
        lastName: "Jogi",
        email: "bhupendra2@gmail.com",
        gender: "FEMALE",
        birthday: new Date("2001-3-2"),
        age:12,
        trees: [
            {
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
