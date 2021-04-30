use sample;

db.bios.insertMany(
    [
        {
            "_id" : 7,
            "name" : { "first" : "John", "last" : "Cruse" },
            "birth" : "1986-10-12T14:12:00Z",
            "death" : "2005-01-25T14:12:00Z",
            "contribs" : [ "Contador", "Analista" ],
            "awards" : [
                { "award" : "Nobel", year: 2000, by: "Maicon" },
                { "award" : "Harvard", year: 1996, by: "Jake" }
            ]
        },

        {
            "_id" : 8,
            "name" : { "first" : "Maria", "last" : "Joaquina" },
            "birth" : "1989-08-15T14:12:00Z",
            "death" : "2018-05-13T14:12:00Z",
            "contribs" : [ "Medica", "Psiquiatra" ],
            "awards" : [
                { "award" : "Medicina", year: 2010, by: "Lakes" },
                { "award" : "Miss Universo", year: 1994, by: "Juliet" }
            ]
        },

        {
            "_id" : 9,
            "name" : { "first" : "Camila", "last" : "Pitanga" },
            "birth" : "1981-09-06T14:12:00Z",
            "death" : "2019-02-18T14:12:00Z",
            "contribs" : [ "Advogada", "Criminalista" ],
            "awards" : [
                { "award" : "OAB", year: 2001, by: "Janice" },
                { "award" : "Doutora", year: 1996, by: "Barbara" }
            ]
        }
    ]
);