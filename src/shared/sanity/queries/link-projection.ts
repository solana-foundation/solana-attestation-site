export const linkProjection = `{
    ...select(
      mode == "external" => {
        "mode": "external",
        url
      },
      mode == "guide-list" => {
        "mode": "guide-list",
      },
      mode == "guide" => {
        "mode": "guide",
        guide -> {
          _id,
          title,
          "slug": slug.current
        }
      },
      mode == "home" => {
        "mode": "home",
      },
      mode == "use-case-list" => {
        "mode": "use-case-list",
      },
      mode == "use-case" => {
        "mode": "use-case",
        useCase -> {
          _id,
          title,
          "slug": slug.current
        }
      }
    )
}`
