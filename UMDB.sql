create table userINFO(
  username varchar(100) NOT NULL,
  email varchar(500) NOT NULL,
  num_wins numeric NOT NULL, 
  num_games_played numeric,
  num_losses numeric, 
  num_deaths numeric,
  primary key (username)
);