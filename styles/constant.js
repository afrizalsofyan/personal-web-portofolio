export const nav_style = (bgTransparent, paddingNav, boxShaddowNav, colorText) => (
    {
      background: `rgba(255, 255, 255, ${bgTransparent})`,
      padding: `${paddingNav}px 0px`,
      boxShadow: `rgb(0 0 0 / ${boxShaddowNav}) 0px 0px 20px 6px`,
      color: colorText < 0.2 ? '#EFFFFD' : `rgba(92, 92, 92, ${colorText})`,
    }
)

export const logo_style = (colorText) => (
    {
      'border-bottom': `2px solid ${colorText < 0.2 ? 'white' : `rgba(92, 215, 245, ${colorText})`}`
    }
)