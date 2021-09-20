const fortuneCookies = [
    "Conquer your fears or they will conquer you",
    "Rivers need springs",
    "Do not fear what yo don't know",
    "You will have a pleasant surprise",
    "Whenever possible, keep it simple",
]

export const getFortune = (): string => {
    const idx = Math.floor(Math.random() * fortuneCookies.length)
    return fortuneCookies[idx]
}