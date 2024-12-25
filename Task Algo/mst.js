// JavaScript implementation of Kruskal's algorithm

function makeSet(parent, rank, n) {
    for (let i = 0; i < n; i++) {
        parent[i] = i;
        rank[i] = 0;
    }
}

function findParent(parent, component) {
    if (parent[component] !== component) {
        parent[component] = findParent(parent, parent[component]);
    }
    return parent[component];
}

function unionSet(u, v, parent, rank) {
    u = findParent(parent, u);
    v = findParent(parent, v);

    if (u !== v) {
        if (rank[u] < rank[v]) {
            parent[u] = v;
        } else if (rank[u] > rank[v]) {
            parent[v] = u;
        } else {
            parent[v] = u;
            rank[u]++;
        }
    }
}

function kruskalAlgo(n, edges) {
    // Sort edges based on weight
    edges.sort((a, b) => a[2] - b[2]);

    const parent = new Array(n);
    const rank = new Array(n);
    makeSet(parent, rank, n);

    let minCost = 0;
    document.write("Following are the edges in the constructed MST:<br>");

    for (const edge of edges) {
        const [u, v, weight] = edge;
        if (findParent(parent, u) !== findParent(parent, v)) {
            unionSet(u, v, parent, rank);
            minCost += weight;
            document.write(${u} -- ${v} == ${weight}<br>);
        }
    }

    document.write(Minimum Cost Spanning Tree: ${minCost});
}

// Example edges (u, v, weight)
const edges = [
    [0, 1, 10],
    [0, 2, 6],
    [0, 3, 5],
    [1, 3, 15],
    [2, 3, 4]
];

kruskalAlgo(4, edges); // 4 is the number of vertices