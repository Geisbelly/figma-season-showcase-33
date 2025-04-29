
import { Video } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const VideosPage = () => {
  const videos = [
    {
      id: 1,
      title: "Figma - Básico ao Avançado",
      videoId: "https://www.youtube.com/watch?v=VLzwFOY3yyM&t=267s", // Replace with your actual YouTube video ID
      description: "Aprenda os conceitos básicos do Figma",
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="container py-12">
        <h1 className="text-4xl font-bold mb-8">Video Aulas</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {videos.map((video) => (
            <Card key={video.id} className="overflow-hidden">
              <CardHeader className="space-y-1">
                <CardTitle className="flex items-center gap-2">
                  <Video />
                  {video.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full rounded-md"
                    src={``}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <p className="mt-4 text-muted-foreground">{video.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default VideosPage;
