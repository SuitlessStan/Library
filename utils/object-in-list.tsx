
export default function containsObject(obj: Object, list: Array<any>) {
    for (let i = 0; i < list.length; i++) {
        if (obj === list[i]) {
            return true
        }
    }
    return false
}