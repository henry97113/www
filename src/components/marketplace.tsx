"use client";
import React from "react";
import ThemesSearch from "./themes-search";
import { getAllThemes, getThemesFromSearch, ZenTheme } from "@/lib/themes";
import ThemeCard from "./theme-card";
import { Button } from "./ui/button";
import StickyBox from "react-sticky-box";

export default function MarketplacePage({ themes }: { themes: ZenTheme[] }) {
	const [searchInput, setSearchInput] = React.useState("");
	const [tags, setTags] = React.useState<string[]>(["all"]);

	return (
		<div className="relative mx-auto flex h-full w-full flex-col lg:flex-row">
			<div className="relative w-full bg-surface px-10 py-48 shadow dark:bg-[#121212] lg:mt-24 lg:w-1/2 lg:w-fit lg:rounded-br-lg lg:rounded-tr-lg lg:py-32 xl:w-1/3 2xl:w-1/4">
				<StickyBox
					className="h-fit min-w-52 text-xs text-muted-foreground lg:mb-0"
					offsetTop={120}
				>
					<h1 className="text-4xl font-bold lg:text-7xl">Mods Store</h1>
					<p className="mt-4 text-lg text-muted-foreground">
						Discover and install Mods for Zen Browser.
					</p>
					<ThemesSearch
						input={searchInput}
						setInput={setSearchInput}
						tags={tags}
						setTags={setTags}
					/>
				</StickyBox>
			</div>
			<div className="mt-10 grid w-full grid-cols-1 gap-8 px-5 pt-12 lg:w-1/2 lg:gap-y-16 lg:px-10 xl:w-2/3 xl:grid-cols-2 2xl:w-3/4 2xl:grid-cols-3">
				{getThemesFromSearch(themes, searchInput, tags).map((theme) => (
					<ThemeCard key={theme.name} theme={theme} />
				))}
			</div>
		</div>
	);
}
