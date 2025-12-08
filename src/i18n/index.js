import messages from '../messages/pt.json'

export function useTranslations(place) {
    return (key) => messages[place][key]
}