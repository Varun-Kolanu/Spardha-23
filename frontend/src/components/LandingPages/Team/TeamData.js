import data from "./team.json"

/**
 * Points to be noted:
 * each person in data should have different name
 */


let all = []
for (let key in data) {
    all = [...all, ...data[key]]
}
data["All"] = all
let scopes = Object.keys(data)
scopes = scopes.filter(scope => scope !== "All")
scopes.unshift("All")

export { data, scopes }