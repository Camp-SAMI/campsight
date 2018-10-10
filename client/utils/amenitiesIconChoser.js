const iconNames = {
  sewage: 'bath',
  power: 'power',
  water: 'shower',
  default: 'bandcamp'
}

export const chooseAmenityIcon = name => {
  const normalizedName = name || 'default'
  return Object.keys(iconNames).includes(normalizedName)
    ? iconNames[normalizedName]
    : 'bandcamp'
}
