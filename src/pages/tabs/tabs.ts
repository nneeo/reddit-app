import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = 'RedditsPage';
  tab2Root = 'SettingsPage';
  tab3Root = 'AboutPage';

  constructor() {

  }
}
