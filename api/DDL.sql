CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `dob` date NOT NULL,
  `last_active` datetime NOT NULL,
  `last_updated` datetime NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `results` (
  `openness` double(9,8) NOT NULL,
  `conscientiousness` double(9,8) NOT NULL,
  `extraversion` double(9,8) NOT NULL,
  `agreeableness` double(9,8) NOT NULL,
  `neuroticism` double(9,8) NOT NULL,
  `user_id` int NOT NULL,
  KEY `user_id` (`user_id`),
  CONSTRAINT `results_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `question_text` (
  `question_id` smallint NOT NULL,
  `question_text` varchar(255) NOT NULL,
  `dimension_id` smallint NOT NULL,
  `dimension_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE `matches` ('df
 `user_id1' int NOT NULL,
 `user_id2` int NOT NULL,
 `distance` double(9, 8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
