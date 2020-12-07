// Dependency graph with a queue
const buildDepMap = (projects, dep) => {
    const map = {};
    projects.forEach(p => {
        const updatedDep = dep
            .filter(d => d[1] === p)
            .map(d => d[0]);
        map[p] = updatedDep;
    });
    return map;
}

const updateDepMap = (project, buildMap) => {
    const newMap = Object.keys(buildMap).reduce((acc, key) => {
        acc[key] = buildMap[key].filter(d => d !== project);
        return acc;
    }, {})
    const { [project]: _, ...theRest } = newMap;
    return theRest;
}

const buildOrder = (projects, dep) => {
    let depMap = buildDepMap(projects, dep);
    const order = [];
    while (projects.length > order.length) {
        const project = projects.find(p => depMap[p] && depMap[p].length === 0);
        if (project) {
            order.push(project);
            depMap = updateDepMap(project, depMap)
        } else {
            throw Error('Cicle Found!')
        }
    }
    return order;
}

const projects = ['a', 'b', 'c', 'd', 'e', 'f'];
const deps = [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']];

console.log(buildOrder(projects, deps));