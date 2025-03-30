import { Component ,OnInit} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-callback-component',
  imports: [],
  templateUrl: './callback-component.component.html',
  styleUrl: './callback-component.component.css'
})
export class CallbackComponentComponent implements OnInit{
  constructor(private router:Router,private route: ActivatedRoute) {}

  
  ngOnInit() {
    
    console.log("I am inside callback");
    console.log("Route is"+this.route);
    const code = this.route.snapshot.queryParams['code'];
    if (code) {
      try {
        // await Auth.federatedSignIn({ customState: code });
        localStorage.setItem('token',code)
        this.router.navigate(['']);
        console.log("code in call back is code"+code)
        console.log("localStorage"+localStorage)
      } catch (error) {
        console.error('Error in federatedSignIn', error);
      }
    }
    
  }
}
