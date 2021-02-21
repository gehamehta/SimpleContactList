import { Injectable } from '@angular/core';
import { Contact } from './contact';
//import {data} from './assets/json/contacts.json';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  public contactList: Contact[];

  constructor() {
    //let fileData = JSON.stringify(data);
    //let jsonUrl = 'assets/json/contacts.json';
    this.contactList = [
      new Contact('Edward Kenway', 'Kenway@va.gov', '2906036054', 'http://prweb.com',
        'https://pbs.twimg.com/profile_images/490623209822105600/1JHdK9lS.jpeg',
        '032 Waubesa Avenue', 'Notes')
    ];
  }

  add(contact: Contact) {
    this.contactList.push(contact);
  }

  update(contact: Contact) {
    const foundContact = this.contactList.find((value: Contact) => {
      return value.id === contact.id;
    });
    if (foundContact === undefined) {
      return false;
    } else {
      Object.assign(foundContact, contact);
      return true;
    }
  }

  delete() {
    this.contactList = this.contactList.filter((contact: Contact) => {
      return !contact.checked;
    });
  }

  deleteById(id: number) {
    this.contactList = this.contactList.filter((contact: Contact) => {
      return contact.id !== id;
    });
  }

}
