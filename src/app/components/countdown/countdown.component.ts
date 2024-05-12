import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'rrn-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
})
export class CountdownComponent implements OnInit, OnDestroy {
  countdownDate: Date = new Date();
  timeLeft!: string;
  private countdownInterval: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Set the date we're counting down to
    this.countdownDate = new Date('May 12, 2024 21:40:00');

    // start the countdown
    this.startCountdown();
  }

  startCountdown(): void {
    // Update the count down every 1 second
    this.countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = this.countdownDate.getTime() - now;

      // calculate days, hours, minutes and seconds left
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // display the result
      this.timeLeft = `${days}D ${hours}H ${minutes}M ${seconds}S`;

      // If the count down is finished, clear the interval
      if (distance < 0) {
        clearInterval(this.countdownInterval);
        this.timeLeft = 'EXPIRED';
        this.router.navigateByUrl('/landing');
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    // Clear the countdown interval when the component is destroyed
    clearInterval(this.countdownInterval);
  }
}
