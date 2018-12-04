const hits = [
  {
    title: "Post 1",
    author: "amanolar94",
    dateTime: "27/10/1994",
    image:
      "https://images.unsplash.com/photo-1517057011470-8f36d636e6ca?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9dcecd9ec3b07624dedb0df0c7b3eeee&auto=format&fit=crop&w=1397&q=80",
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus et mauris non lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
  },

  {
    title: "Post 2",
    author: "amanolar94",
    dateTime: "27/10/1994",
    image: "",
    abstract:
      "https://images.unsplash.com/photo-1540331547168-8b63109225b7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1633cdbc60721e739bb0fa4f07353e90&auto=format&fit=crop&w=661&q=80"
  },
  {
    title: "Post 3",
    author: "amanolar94",
    dateTime: "27/10/1994",
    image:
      "https://images.unsplash.com/photo-1540349946389-8ea10a9da3cd?ixlib=rb-0.3.5&s=3f3b868a3564013100808184a8db6f1f&auto=format&fit=crop&w=634&q=80",
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus et mauris non lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
  },
  {
    title: "Post 4",
    author: "amanolar94",
    dateTime: "27/10/1994",
    image:
      "https://images.unsplash.com/photo-1540349946389-8ea10a9da3cd?ixlib=rb-0.3.5&s=3f3b868a3564013100808184a8db6f1f&auto=format&fit=crop&w=634&q=80",
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus et mauris non lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
  },
  {
    title: "Post 5",
    author: "amanolar94",
    dateTime: "27/10/1994",
    image:
      "https://images.unsplash.com/photo-1540382908621-298d694ddc55?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=df6dabb522a8ac836b8fb4243bc2989f&auto=format&fit=crop&w=634&q=80",
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus et mauris non lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
  },
  {
    title: "Post 6",
    author: "amanolar94",
    dateTime: "27/10/1994",
    image:
      "https://images.unsplash.com/photo-1515018403349-872e8206d50a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0b06fc389eae29b1772009b8733f2df3&auto=format&fit=crop&w=989&q=80",
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus et mauris non lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
  },
  {
    title: "Post 7",
    author: "amanolar94",
    dateTime: "27/10/1994",
    image:
      "https://images.unsplash.com/photo-1540759786422-c60d5dc57d7b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=570bd0585a4b1b7b27c818f42e98b671&auto=format&fit=crop&w=500&q=60",
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus et mauris non lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
  },
  {
    title: "Post 8",
    author: "amanolar94",
    dateTime: "27/10/1994",
    image:
      "https://images.unsplash.com/photo-1540728903870-8ea6902c580b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6c7c337e269ad980a8c38eaa1ac18ea9&auto=format&fit=crop&w=500&q=60",
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus et mauris non lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
  },
  {
    title: "Post 9",
    author: "amanolar94",
    dateTime: "27/10/1994",
    image:
      "https://images.unsplash.com/photo-1540652842705-6416a626b74d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d63664ce5a674d7dd7aa6e327cf00e0e&auto=format&fit=crop&w=500&q=60",
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus et mauris non lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
  },
  {
    title: "Post 10",
    author: "amanolar94",
    dateTime: "27/10/1994",
    image:
      "https://images.unsplash.com/photo-1540652790422-3baa70db33b9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2944ab7807f3ec3051b0b54b6e462ff3&auto=format&fit=crop&w=500&q=60",
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus et mauris non lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
  },
  {
    title: "Post 11",
    author: "amanolar94",
    dateTime: "27/10/1994",
    image:
      "https://images.unsplash.com/photo-1540640438553-d1b1961931f6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cdd096546035954822183ee30ca7b278&auto=format&fit=crop&w=1351&q=80",
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus et mauris non lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
  },
  {
    title: "Post 112",
    author: "amanolar94",
    dateTime: "27/10/1994",
    image:
      "https://images.unsplash.com/photo-1540667483859-801afb197b10?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7ec8ea615e64c685084d87ad279db5ca&auto=format&fit=crop&w=500&q=60",
    abstract:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus et mauris non lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
  }
];
export default { hits };
