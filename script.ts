
//------------------------------------[Son]------------------------------------
class SonAccount{

    balance:number=0

    constructor(balance:number){
        this.balance = balance
    }
 
    //-----------Deposito----------
    oneDeposit(versamento:number){
        this.balance = this.balance + versamento
        console.log('Hai versato:',versamento,'€. Adesso il tuo conto è di:',this.balance, '€')
        
    }
    //-----------Prelievo----------
    oneWithDraw(prelievo:number){
        let tot:number = 0
        tot = this.balance - prelievo
 
        if(tot<0){
            console.log('Prelievo non consentito');  
        }else{
 
            this.balance = tot
            console.log('Hai prelevato:' , prelievo, '€. Adesso il tuo conto è di:', this.balance, '€');
            
 
        }
    }
    //-----------Due depositi----------
    twoDeposit(versamento1:number, versamento2:number){
        this.balance = this.balance + versamento1 + versamento2
        console.log('Hai versato:',versamento1 + versamento2,'€. Adesso il tuo conto è di:',this.balance, '€')
    }
    //-----------Due prelievi----------
    twoWithDraw(prelievo1:number, prelievo2:number){
 
        let tot:number = 0
        tot = this.balance - prelievo1 - prelievo2
 
        if(tot<0){
            console.log('Prelievo non consentito');  
        }else{
 
            this.balance = tot
            console.log('Hai prelevato:' , prelievo1 + prelievo2, '€. Adesso il tuo conto è di:', this.balance, '€');
 
        }
       
    }

}



//------------------------------------[Mother]------------------------------------
class MotherAccount{

   
   balance:number=0

   constructor(balance:number){
       this.balance = balance
   }

   //-----------Deposito----------
   oneDeposit(versamento:number){
       this.balance = this.balance + versamento
       console.log('Hai versato:',versamento,'€. Adesso il tuo conto è di:',this.balance, '€')
       
   }
   //-----------Prelievo----------
   oneWithDraw(prelievo:number){
       let tot:number = 0
       tot = this.balance - prelievo

       if(tot<0){
           console.log('Prelievo non consentito');  
       }else{

           this.balance = tot
           console.log('Hai prelevato:' , prelievo, '€. Adesso il tuo conto è di:', this.balance, '€');
           

       }
   }
   //-----------Due depositi----------
   twoDeposit(versamento1:number, versamento2:number){
       this.balance = this.balance + versamento1 + versamento2
       console.log('Hai versato:',versamento1 + versamento2,'€. Adesso il tuo conto è di:',this.balance, '€')
   }
   //-----------Due prelievi----------
   twoWithDraw(prelievo1:number, prelievo2:number){

       let tot:number = 0
       tot = this.balance - prelievo1 - prelievo2

       if(tot<0){
           console.log('Prelievo non consentito');  
       }else{

           this.balance = tot
           console.log('Hai prelevato:' , prelievo1 + prelievo2, '€. Adesso il tuo conto è di:', this.balance, '€');

       }
      
   }
   //-----------Calcolo interessi----------
   addInterest(){
    let totIntereset = (this.balance * 10)/100
    totIntereset = totIntereset + this.balance
    console.log('Il saldo sul tuo conto in aggiunta agli interessi è: ',totIntereset);
   }
}








console.log('-------Figlio------');
let luca = new SonAccount(30)


console.log('=====================================');



console.log('-------Madre------');
let anna = new MotherAccount(100)





















//------------------------------------[Mother]------------------------------------
const motherBalance = document.getElementById( //balance
    "mother-balance"
  ) as HTMLInputElement;

  const motherFormDeposit = document.getElementById( //deposit form
    "mother-deposit"
  ) as HTMLInputElement;

  const motherFormWithDraw = document.getElementById( //withdraw form
  "mother-withdraw"
) as HTMLInputElement;


const motherTextWithDraw = document.getElementById( //withdraw input
"mother-withdraw-input"
) as HTMLInputElement;


motherBalance.innerText = anna.balance.toString()


//------------------------------------[Deposit]------------------------------------
motherFormDeposit.addEventListener('submit',function(e){
    e.preventDefault()

    const motherInputDeposit = document.getElementById( //deposit input
    "mother-deposit-input"
  ) as HTMLInputElement;

  anna.oneDeposit(Number(motherInputDeposit.value))
motherBalance.innerText = anna.balance.toString()
motherInputDeposit.value = ''

})



//------------------------------------[Withdraw]------------------------------------
motherFormWithDraw.addEventListener('submit',function(e){
    e.preventDefault()

    const motherInputWithDraw = document.getElementById( //WithDraw input
    "mother-withdraw-input"
  ) as HTMLInputElement;

  anna.oneWithDraw(Number(motherInputWithDraw.value))
motherBalance.innerText = anna.balance.toString()
motherInputWithDraw.value = ''

})
//-----------------------------------------------------------------------------------------------------






















//------------------------------------[Son]------------------------------------
const sonBalance = document.getElementById( //balance
    "son-balance"
  ) as HTMLInputElement;

  const sonFormDeposit = document.getElementById( //deposit form
    "son-deposit"
  ) as HTMLInputElement;

  const sonFormWithDraw = document.getElementById( //withdraw form
  "son-withdraw"
) as HTMLInputElement;


const sonTextWithDraw = document.getElementById( //withdraw input
"son-withdraw-input"
) as HTMLInputElement;


sonBalance.innerText = luca.balance.toString()


//------------------------------------[Deposit]------------------------------------
sonFormDeposit.addEventListener('submit',function(e){
    e.preventDefault()

    const sonInputDeposit = document.getElementById( //deposit input
    "son-deposit-input"
  ) as HTMLInputElement;

  luca.oneDeposit(Number(sonInputDeposit.value))
sonBalance.innerText = luca.balance.toString()
sonInputDeposit.value = ''

})



//------------------------------------[Withdraw]------------------------------------
sonFormWithDraw.addEventListener('submit',function(e){
    e.preventDefault()

    const sonInputWithDraw = document.getElementById( //WithDraw input
    "son-withdraw-input"
  ) as HTMLInputElement;

  luca.oneWithDraw(Number(sonInputWithDraw.value))
sonBalance.innerText = luca.balance.toString()
sonInputWithDraw.value = ''

})
//-----------------------------------------------------------------------------------------------------








