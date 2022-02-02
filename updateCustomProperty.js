function getCustomPropertiy(elem, prop) {
    return parseFloat(getComputedStyle(elem).getPropertyValue(prop)) || 0
}

export function setCustomPropertiy(elem, prop, value) {
    elem.style.setProperty(prop, value)
}

export function incrementCustomPropertiy(elem, prop, inc) {
    setCustomPropertiy(elem, prop, getCustomPropertiy(elem, prop) + inc)

}