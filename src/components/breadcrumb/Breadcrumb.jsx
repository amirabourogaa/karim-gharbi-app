import React from 'react';

const Breadcrumb = ({page,path}) => {
    return (
        <nav className="text-sm">
            <ul className="flex space-x-2 font-mansalva">
                <li><a href="/" className="text-white hover:underline">Accueil</a></li>
                <li>/</li>
                <li><a href={path} className="text-white hover:underline">{page}</a></li>
            </ul>
        </nav>
    );
};

export default Breadcrumb;
