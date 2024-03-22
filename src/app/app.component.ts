
import { Component, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  @ViewChild('myForm') myForm : NgForm |any;
  onSubmit(param:any){
    console.log('onSubmit triggered!', param);
    this.myForm.reset();
    
  }
  boxOne : Number | any  =0;
  boxTwo :  Number | any =0;
  data: any;
  options: any;

  onfocusoutBoxOne(){
   console.log(this.boxOne);
    this.boxTwo = 100-Number(this.boxOne);

   }

  onfocusoutBoxTwo(){
    console.log(this.boxTwo );
    this.boxOne = 100-Number(this.boxTwo)
  }
  
  createChart (){
    const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');

        this.data = {
            labels: ['boxOne', 'boxTwo' ],
            datasets: [
                {
                    data: [this.boxOne , this.boxTwo],
                    backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
                    hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
                }
            ]
        };

        this.options = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true,
                        color: textColor
                    }
                }
            }
        };
  }
}