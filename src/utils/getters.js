//Retrieve all values from an Immutable list, return Native array
//@TODO: find out if this is faster than toJS()
export function mapFromImmutable (immutableList) {
    const values = [];
    if (immutableList.size > 1) {
        for( let i = 0; i < immutableList.size; i++) {
            values.push(immutableList.get(i))
        }
    }
    return values;
}
