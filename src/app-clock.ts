import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { ClockController } from './clock-controller.js';

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
    const hour = zeroPrefix(this.clock.value.getHours());
    const separator = this.clock.value.getSeconds() % 2 == 0 ? ':' : ' ';
    const mins = zeroPrefix(this.clock.value.getMinutes());
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

function zeroPrefix(value: number) {
  if (value >= 10) {
    return value.toString();
  }
  return '0' + value.toString();
}

