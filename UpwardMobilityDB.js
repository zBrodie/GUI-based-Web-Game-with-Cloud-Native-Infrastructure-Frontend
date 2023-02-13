db.createCollection("Player_Info")
db.Player_Info.insert(
    {
       Username: "TheLegend27",
       User_id: "00001",
       email: "TheLegend27@gmail.com",
       games_won: "2",
       kills: "140",
       deaths: "20",
       losses: "62"
    }
    
)

db.Player_Info.find().pretty()