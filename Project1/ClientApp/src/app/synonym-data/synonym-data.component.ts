import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { SynonymService } from '../../app/synonym-data/synonym-data.service';


@Component({
  selector: 'app-synonym-component',
  templateUrl: './synonym-data.component.html'
})

export class SynonymDataComponent {
  public synonyms: Synonyms[];
  checkoutForm; 


  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private formBuilder: FormBuilder, private synonymService: SynonymService) {
      this.synonyms = [];

    this.checkoutForm = this.formBuilder.group({
      term: '',
      synonymList: ''
    });
  }

  onSubmit(customerData: Synonyms) {
  
    this.synonymService
      .saveSynonym(customerData)
      .subscribe();

    this.synonyms.push(customerData);
    var synonymsToDisplay = customerData.synonymList.split(',');
    for (var i = 0; i < synonymsToDisplay.length; i++) {
      var syn = synonymsToDisplay[i];
      this.synonyms.push({ id: 0, term: syn, synonymList: customerData.term });
    }

    this.checkoutForm.reset();
  }
}

interface Synonyms {
  id: number;
  term: string;
  synonymList: string;

}
