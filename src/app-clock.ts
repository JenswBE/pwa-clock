import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { ClockController } from './clock-controller.js';

const timeFormatHour = new Intl.DateTimeFormat(undefined, {
  hour: '2-digit',
});
const timeFormatMinute = new Intl.DateTimeFormat(undefined, {
  minute: '2-digit',
});
const dateFormat = new Intl.DateTimeFormat(undefined, {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

@customElement('app-clock')
export class AppClock extends LitElement {
  private clock = new ClockController(this, 100);

  static styles = [
    css`
      main,
      div {
        height: 100%;
      }

      .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      p {
        text-align: center;
        margin: 0;
        vertical-align: middle;
      }

      #time-container {
        flex: 7;
        font-size: 275px;
        font-weight: black;
        font-family: ChivoMono;
      }

      #date-container {
        flex: 3;
        font-size: 60px;
      }
    `,
  ];

  render() {
    const hour = timeFormatHour.format(this.clock.value);
    const separator = this.clock.value.getSeconds() % 2 == 0 ? ':' : ' ';
    const mins = timeFormatMinute.format(this.clock.value);
    const date = dateFormat.format(this.clock.value);
    return html`
      <main>
        <div class="container">
          <div id="time-container" class="container">
            <p>${hour}${separator}${mins}</p>
          </div>
          <div id="date-container" class="container">
            <p id="date">${date}</p>
          </div>
        </div>
      </main>
    `;
  }
}

