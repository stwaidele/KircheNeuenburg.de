plugin.Tx_Formhandler.settings {   
  debug = 0 
  templateFile = fileadmin/contactform/1-contactform.html  
  langFile = fileadmin/contactform/1-lang.xml
  formValuesPrefix = formhandler    
  finishers {     
    1 {       
      class = Tx_Formhandler_Finisher_Mail     
    }     
    2 {       
      class = Tx_Formhandler_Finisher_SubmittedOK       
      config.returns = 1     
    }   
  }
  validators.1.class = Validator_Default
  validators.1.disabled = 0
  validators.1.config.fieldConf {
    vorname.errorCheck.1 = required
	nachname.errorCheck.1 = required
 	gesch.errorCheck.1 = required
	geb.errorCheck.1 = required
    erz-vorname.errorCheck.1 = required
	erz-nachname.errorCheck.1 = required
	strasse.errorCheck.1 = required
    plz.errorCheck.1 = required
	ort.errorCheck.1 = required

    erz-email.errorCheck.1 = required
    erz-email.errorCheck.2 = email
  } 
  addErrorAnchors = 1
  singleErrorTemplate {
    totalWrap = |
    singleWrap = <span style="color: red;">|</span>
  }
  errorListTemplate {
    totalWrap = <div style="color: red;">Bitte vervollständigen Sie die fehlenden Angaben um die Anmeldung abzuschließen: <ul>|</ul></div>
    singleWrap = <li>|</li>
  }
}