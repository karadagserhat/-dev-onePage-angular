// Business Card

export class BusinessCard {
  // Field
  id: number;
  title: string;
  text: string;
  description: string;
  picture: string;
  date: string;
  link: string;
  icon: string;

  // constructor
  constructor(
    id: number,
    title: string,
    text: string,
    description: string,
    picture: string,
    date: string,
    link: string,
    icon: string
  ) {
    this.id = id;
    this.title = title;
    this.text = text;
    this.description = description;
    this.picture = picture;
    this.date = date;
    this.link = link;
    this.icon = icon;
  }
}
