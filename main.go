package main

import (
	"log"

	"github.com/maxence-charriere/go-app/v10/pkg/app"

	"github.com/JenswBE/pwa-clock/components"
)

func main() {
	app.Route("/", func() app.Composer { return &components.Clock{} })

	app.RunWhenOnBrowser()

	err := app.GenerateStaticWebsite("output", &app.Handler{
		// Page
		Title:  "Clock",
		Lang:   "nl",
		Styles: []string{"/web/main.css"},

		// PWA
		Name:            "Clock",
		ShortName:       "Clock",
		Description:     "Clock with offline support",
		ThemeColor:      "#E1477E",
		BackgroundColor: "#E1477E",
		Icon: app.Icon{
			Default: "/web/assets/icons/192x192.png",
			Large:   "/web/assets/icons/512x512.png",
		},
	})
	if err != nil {
		log.Fatal(err)
	}
}
