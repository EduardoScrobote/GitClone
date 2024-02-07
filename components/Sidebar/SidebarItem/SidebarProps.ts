type SidebarItem = {
  name: string;
  type: string;
  image?: string;
}[];

export const SidebarItems: SidebarItem = [
  { name: "Musicas Curtidas", type: "Playlist" },
  { name: "Mais tocadas 2023", type: "Playlist" },
  { name: "Mais tocadas 2022", type: "Playlist" },
  { name: "Mais tocadas 2021", type: "Playlist" },
  { name: "Mais tocadas 2020", type: "Playlist" },
  { name: "Verão", type: "Playlist", image: "bg-verao" },
  { name: "Inverno", type: "Playlist" },
  { name: "Viajem", type: "Playlist" },
  { name: "Role", type: "Playlist" },
  { name: "Rap", type: "Playlist" },
  { name: "Eletronicas", type: "Playlist" },
  { name: "MPB", type: "Playlist" },
];
