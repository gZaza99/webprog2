-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2021. Máj 27. 22:43
-- Kiszolgáló verziója: 10.4.19-MariaDB
-- PHP verzió: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `db_webprog`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `channels`
--

CREATE TABLE `channels` (
  `Id` int(11) NOT NULL,
  `name` varchar(64) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `player_1_ID` int(11) DEFAULT NULL,
  `player_2_ID` int(11) DEFAULT NULL,
  `status` char(1) COLLATE utf8_hungarian_ci NOT NULL DEFAULT 'e' COMMENT 'e:empty\r\nu:unsatured\r\ns:satured'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `channels`
--

INSERT INTO `channels` (`Id`, `name`, `player_1_ID`, `player_2_ID`, `status`) VALUES
(1, NULL, 1, 2, 's'),
(2, NULL, 3, NULL, 'u'),
(3, NULL, NULL, NULL, 'e');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `player`
--

CREATE TABLE `player` (
  `Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `player`
--

INSERT INTO `player` (`Id`) VALUES
(1),
(2),
(3);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `channels`
--
ALTER TABLE `channels`
  ADD PRIMARY KEY (`Id`);

--
-- A tábla indexei `player`
--
ALTER TABLE `player`
  ADD PRIMARY KEY (`Id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `channels`
--
ALTER TABLE `channels`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT a táblához `player`
--
ALTER TABLE `player`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
