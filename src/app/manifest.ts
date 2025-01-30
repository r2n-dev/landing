import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'R2N - Andres Artunduaga',
        short_name: "R2N",
        description: "Andres Artunduaga's personal website",
        start_url: '/',
        display: 'standalone',
        background_color: '#1E283A',
        theme_color: '#1E283A',
        icons: [
            {
                "src": "/metadata_icons/icon-192.png",
                "sizes": "192x192",
                "type": "image/png"
            },
            {
                "src": "/metadata_icons/icon-512.png",
                "sizes": "512x512",
                "type": "image/png"
            },
        ],
    }
}