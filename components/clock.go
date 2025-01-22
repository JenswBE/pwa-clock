package components

// Based on https://github.com/maxence-charriere/go-app/issues/716

import (
	"time"

	"github.com/goodsign/monday"
	"github.com/maxence-charriere/go-app/v10/pkg/app"
)

const (
	TimeFormatHour        = "15"
	TimeFormatMinute      = "04"
	TimeFormatSecond      = "05"
	TimeFormatWithSeconds = false
	TimeFormatSeparator   = ":"
	DateFormat            = monday.DefaultFormatNlBEFull
)

type Clock struct {
	app.Compo
	time    string
	date    string
	running bool
	ticker  *time.Ticker
}

var (
	_ app.Mounter    = (*Clock)(nil)
	_ app.Dismounter = (*Clock)(nil)
)

func (c *Clock) OnMount(ctx app.Context) {
	ctx.Async(func() {
		c.ticker = time.NewTicker(time.Second * 1)
		defer func() {
			c.ticker.Stop()
			app.Log("ticker stopped")
		}()
		c.running = true
		for range c.ticker.C {
			if !c.running {
				app.Log("stopped")
				break
			}
			ctx.Dispatch(func(_ app.Context) {
				c.updateTime()
			})
		}
		app.Log("exits")
	})
	c.updateTime()
}

func (c *Clock) updateTime() {
	now := time.Now()
	timeSep := TimeFormatSeparator
	if now.Second()%2 == 0 {
		timeSep = " "
	}
	format := TimeFormatHour + timeSep + TimeFormatMinute
	if TimeFormatWithSeconds {
		format += timeSep + TimeFormatSecond
	}
	c.time = now.Format(format)
	c.date = monday.Format(now, DateFormat, monday.LocaleNlBE)
}

func (c *Clock) Render() app.UI {
	return app.Div().Class("container").Body(
		app.Div().
			ID("time-container").
			Class("container").
			Body(
				app.P().Text(c.time),
			),
		app.Div().
			ID("date-container").
			Class("container").
			Body(
				app.P().Text(c.date),
			),
	)
}

func (c *Clock) OnDismount() {
	app.Log("stopping")
	c.running = false
	c.ticker.Reset(1)
}
