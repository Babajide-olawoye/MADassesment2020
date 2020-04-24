import { Component } from '@angular/core';

@Component({
  selector: 'app-recommend-page',
  templateUrl: './recommend-page.page.html',
  styleUrls: ['./recommend-page.page.scss'],
})
export class RecommendPagePage {
  //this are the data am using in the html file
  //they are store in an object array of string
  fave: object[] =
  [{name: "Seven Deadly Sin", imgage:"../../assets/PICS/7sins.jpg", discript: "The Seven Deadly Sins were once an active group of knights in the region of Britannia, who disbanded after they supposedly plotted to overthrow the Liones Kingdom. Their supposed defeat came at the hands of the Holy Knights, but rumors continued to persist that they were still alive. Ten years later, the Holy Knights staged a coup d'Ă©tat and captured the king, becoming the new, tyrannical rulers of the kingdom. The third princess, Elizabeth, then starts out on a journey to find the Seven Deadly Sins and enlist their help in taking back the kingdom from the Holy Knights. She founds the Dragon sin of Wraith and from there her adventure has begun."},
  {name: "My Hero Academia", imgage:"../../assets/PICS/HerAcademia.jpg", discript:"In a world where people with superpowers are the norm, Izuku Midoriya has dreams of one day becoming a Hero, despite being bullied by his classmates for not having a Quirk. After being the only one to try and save his childhood friend Katsuki Bakugo from a villain, All Might, the world's greatest Hero, bestows upon him his own Quirk 'One For All'. The story follows Izuku's entrance into U.A. High School, a school that cultivates the next generation of superheroes. As Izuku and his new friends try to balance their Hero training with ordinary school duties, they must face new challenges including the League of Villains, an evil organization established by All Might's archenemy, All For One, to destroy all Heroes and take control of society."},
  {name: "Swords Art Online", imgage:"../../assets/PICS/SAO.jpg", discript:"In 2022, a virtual reality massively multiplayer online role-playing game (VRMMORPG) called Sword Art Online (SAO) is released. With the NerveGear, a helmet that stimulates the user's five senses via their brain, players can experience and control their in-game characters with their minds. Both the game and the NerveGear were created by Akihiko Kayaba. Unfortunately there was an incident causing 10,000 players unable to log out. Kayaba appears and tells the players that they must beat all 100 floors of Aincrad, a steel castle which is the setting of SAO, if they wish to be free. Those who suffer in-game deaths or forcibly remove the NerveGear out-of-game will suffer real-life deaths."},
  ];

}
