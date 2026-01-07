import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Eye } from "lucide-react";
import projectImage1 from '../assets/productImages/visually-enhanced-leaderboard-for-smartphone-quiz.png';
import projectImage2 from '../assets/productImages/mbox-file-parser.png';
import projectImage3 from '../assets/productImages/jobspec-creator.png';
import projectImage4 from '../assets/productImages/invoice-parser-and-report-downloader.png';
import projectImage5 from '../assets/productImages/svf-to-cesium-3d-tiles-pipeline.png';
import projectImage6 from '../assets/productImages/just-watch-shows-feed-generator.png';
import projectImage7 from '../assets/productImages/xml-builder-for-google-sheets.png';
import projectImage8 from '../assets/productImages/stockx-top-100-trending-products.png';
import projectImage9 from '../assets/productImages/peoples-choice-competition.png';
import projectImage10 from '../assets/productImages/scheduled-allbirds-com-scraper.png';
import projectImage11 from '../assets/productImages/azure-container-app-job.png';
import projectImage12 from '../assets/productImages/excel-csv-to-json-viewer.png';

const projects = [
  {
    title: "Leaderboard for Smartphone Quiz",
    description: "An interactive and visually engaging leaderboard that transforms raw quiz data from JSON into a clear, dynamic ranking of team performance for smartphone-based quizzes.",
    detailedDescription: "This project focuses on converting structured quiz result data stored in a JSON file into a visually enhanced, interactive leaderboard optimized for smartphone displays. The JSON data contains detailed scoring information, including total points, round-by-round performance, and team-specific statistics.<br><br>The system extracts and processes this data to present rankings in an intuitive format that highlights team standings, score progression, and performance trends across quiz rounds. Emphasis is placed on visual clarity, responsive design, and smooth interactions to ensure the leaderboard is easily understood by both quiz hosts and participants in real time.<br><br>By combining data transformation with thoughtful visual design, the leaderboard improves audience engagement, reduces cognitive load, and elevates the overall quiz experience. The solution can be extended to support live updates, animations, filtering, and customization for different quiz formats.",
    tags: ["HTML", "CSS", "JavaScript", "JSON"],
    category: "Web App",
    imageUrl: projectImage1,
    videoUrl: "https://www.youtube.com/embed/fBxSsm8Ahag?si=Vns-yM66k-bmJBKc",
  },
  {
    title: "Mbox File Parser",
    description: "Mbox File Parser is a Python-based tool that processes .mbox email files, categorizes messages by label, and extracts key email data into a structured CSV format.",
    detailedDescription: "Mbox File Parser is a lightweight Python utility designed to efficiently parse email data stored in .mbox files. The tool reads and processes each email message, identifies and categorizes emails based on their associated labels, and extracts relevant metadata such as sender, recipient, subject, date, and message content.<br>The extracted information is then organized and exported into a CSV file, making it easy to analyze, search, or integrate with other data processing workflows. This tool is particularly useful for email archiving, data analysis, migration tasks, or auditing large mailboxes. Its modular design allows for easy extension to support additional fields, filtering rules, or output formats.",
    tags: ["Python", "Tkinter","MBOX","CSV"],
    category: "Desktop App",
    imageUrl: projectImage2,
    videoUrl: "https://www.youtube.com/embed/Iq_KXKiJFP8?si=6m_H4TVcXvjwxMYg",
  },
  {
    title: "JobSpec Creator",
    description: "JobSpec Creator is a Python-based tool that automatically converts Excel job content questionnaires into polished, well-structured Word job descriptions.",
    detailedDescription: "JobSpec Creator is a Python utility designed to streamline the creation of job descriptions by transforming structured job content questionnaires stored in Excel files into professionally formatted Word documents. The tool parses role details, responsibilities, requirements, and other key job attributes, then organizes them into a clear and consistent job specification layout.<br>By automating this process, JobSpec Creator reduces manual effort, minimizes formatting inconsistencies, and ensures accuracy across job descriptions. It is especially valuable for HR teams, recruiters, and organizations managing large volumes of job roles. The tool can be customized to support different templates, role types, and formatting standards, making it adaptable to various organizational needs.",
    tags: ["Python", "Tkinter","Excel","Docx"],
    category: "Desktop App",
    imageUrl: projectImage3,
    videoUrl: "https://www.youtube.com/embed/-g9rgfzi3TI?si=RTtdrjjAZ6BbW1pr",
  },
  {
    title: "Invoice Parser & Report Downloader",
    description: "Invoice Parser & Report Downloader is a Python automation script that retrieves invoices via email interactions, downloads reports from provided URLs, and processes them according to company-specific rules.",
    detailedDescription: "Invoice Parser & Report Downloader is a Python-based automation solution designed to streamline invoice handling and reporting workflows. The script initiates email interactions to request invoices, monitors responses, and extracts download links supplied by vendors or systems. It then automatically downloads the invoice files and processes them based on predefined, company-specific business rules.<br>The tool parses invoice data, organizes files into structured directories, and prepares the data for further reporting or auditing. By eliminating manual downloads and data handling, it reduces processing time, minimizes human error, and ensures consistency across invoice management tasks. The script can be extended to support additional file formats, validation rules, and reporting outputs.",
    tags: ["Python", "Playwright", "XML", "Excel"],
    category: "Automation",
    imageUrl: projectImage4,
    videoUrl: "https://www.youtube.com/embed/a1E2lQTwT1o?si=tlxNGXaLtyU3JRud",
  },
  {
    title: "SVF to Cesium 3D Tiles Pipeline",
    description: "An automated pipeline that converts Autodesk SVF files into Cesium-compatible 3D Tiles and uploads them to Cesium ion for large-scale 3D visualization.This pipeline overcomes Windows compatibility issues by leveraging Docker.",
    detailedDescription: "This project automates the end-to-end workflow of transforming Autodesk SVF files into formats suitable for web-based 3D visualization using Cesium. The pipeline first converts SVF models into GLTF, then into GLB, and finally prepares and uploads the resulting assets as Cesium 3D Tiles to Cesium ion.<br><br>Due to known compatibility issues with the svf-utils package on Windows—particularly when parsing SVF2 models—the pipeline is designed to run in a Linux-like environment. Docker support is fully integrated to provide a consistent, reliable execution environment that avoids platform-specific issues.<br><br>The solution streamlines complex 3D data conversion, reduces manual effort, and ensures repeatable, scalable processing of large CAD models. It is well-suited for applications such as digital twins, GIS visualization, construction monitoring, and interactive 3D web experiences, and can be extended to support batch processing, automation, and CI/CD integration.",
    tags: ["Docker", "SVF", "GLB", "Cesium","Node.js"],
    category: "Automation",
    imageUrl: projectImage5,
    videoUrl: "https://www.youtube.com/embed/dFVP2iLtSng?si=rf6pqEhF2ltQPmPE",
  },
  {
    title: "Just Watch (Shows) Feed Generator",
    description: "A Google Apps Script that converts structured Google Sheets data into a validated JSON feed for Streaming Service, Application Stores, Application Packages, Shows, Seasons, and Episodes. Everything within Google Workspace.",
    detailedDescription: "This project automates the creation of a structured JSON feed from Google Sheets data. It supports schema validation, publishing to Google Drive, downloading via a modal interface, and merging feeds with structure checks. Designed for content teams, it ensures accurate, up-to-date feeds for streaming shows while reducing manual errors and streamlining data management.",
    tags: ["Google Apps Script", "Google Sheets", "JSON"],
    category: "Automation",
    imageUrl: projectImage6,
    videoUrl: "https://www.youtube.com/embed/AoY8-SdZJJU?si=kVSk2sl8ccCPiBT6",
  },
  {
    title: "XML Builder for Google Sheets",
    description: "A Google Apps Script that generates structured XML from Google Sheets data through a custom menu with live preview and validation.",
    detailedDescription: "This project enables users to generate dynamic, well-structured XML directly from data entered in a Google Sheet. It adds a custom \"XML Builder\" menu that allows users to parse sheet data into XML and preview the output in a dialog.<br><br>The script supports complex form structures including single and multi-select field groups, short and long textboxes, nested sections and subsections, and optional follow-up inputs. Built-in dialogs and error handling ensure a smooth user experience while generating accurate XML output.",
    tags: ["Google Apps Script", "Google Sheets", "XML"],
    category: "Automation",
    imageUrl: projectImage7,
    videoUrl: "https://www.youtube.com/embed/F83uYSL8tF0?si=rARhuNxtz4Vh-HeB",
  },
  {
    title: "StockX Top 100 Trending Products",
    description: "A Google Apps Script that scrapes the top 100 trending products on StockX hourly and allows manual data refresh through a custom menu.",
    detailedDescription: "This project uses Google Apps Script to automatically scrape the latest top 100 trending products from StockX on an hourly schedule. The collected data is stored and updated for easy access and analysis.<br><br>A custom menu is added to the Google Sheet, enabling users to manually refresh the data on demand. This combination of scheduled automation and manual control ensures the dataset remains current while providing flexibility for quick updates.",
    tags: ["Google Apps Script", "Google Sheets", "Scraping"],
    category: "Data",
    imageUrl: projectImage8,
    videoUrl: "https://www.youtube.com/embed/Ad9jYqse4Wo?si=NDGWUvJlYfRXfSRp",
  },
  {
    title: "People's Choice Competition",
    description: "A live web-based leaderboard that displays real-time voting results from a Google Sheet with automatic ranking updates.",
    detailedDescription: "This project is a live web application that visualizes voting results for a People's Choice competition. Votes are collected automatically in a Google Sheet and synchronized with the web app, which refreshes every minute to reflect the latest rankings.<br><br>The system processes incoming votes, calculates rankings dynamically, and presents the results in a clear, engaging leaderboard format. It is designed for live events, competitions, and audience-driven voting scenarios where real-time visibility and accuracy are essential.",
    tags: ["Web App", "Google Sheets","Leaderboard"],
    category: "Web App",
    imageUrl: projectImage9,
    videoUrl: "https://www.youtube.com/embed/NHyk6Fh0hK8?si=DRpKmW5nWzVAiBWe",

  },
  {
    title: "Scheduled allbirds.com Scraper",
    description: "An automated Python-based product scraper that fetches data from the Allbirds public API on a scheduled basis using GitHub Actions.",
    detailedDescription: "This project is an automated data scraping system built with Python that retrieves product information from the Allbirds public products API. The scraper is configured to run on a fixed schedule using GitHub Actions, enabling hands-free, repeatable data collection.<br><br>Each run generates a timestamped JSON file containing the latest product data, which is automatically committed back into the repository. This setup demonstrates how to combine web scraping, scheduled automation, and CI/CD workflows to maintain up-to-date datasets without manual intervention.",
    tags: ["Python", "Web Scraping", "GitHub Actions"],
    category: "DevOps",
    imageUrl: projectImage10,
    videoUrl: "https://www.youtube.com/embed/tsFM9zKOrXs?si=Tr7KPEcHYHAGiPO2",
  },
  {
    title: "Azure Container App Job",
    description: "A scheduled Azure Container Job that automates data processing, analysis, storage, and email notifications using multiple Azure services.",
    detailedDescription: "This project is an automated Azure Container Job designed to run on a weekly schedule and handle an end-to-end data workflow. The job processes incoming data, performs analysis, and sends automated email notifications based on the results.<br><br>Sensitive configuration values and credentials are securely stored in Azure Key Vault, while processed files are saved in Azure Blob Storage for durability and access. Structured data is persisted in Azure Cosmos DB, enabling scalable and reliable storage. This solution demonstrates how to orchestrate containerized workloads with Azure services to build secure, maintainable, and fully automated cloud-based data pipelines.",
    tags: ["Azure", "Container App Job","Cosmos DB"],
    category: "DevOps",
    imageUrl: projectImage11,
    videoUrl: "https://www.youtube.com/embed/HaTYQnzNDbs?si=gJ6L5866wN-EsmtF",
  },
  {
    title: "Excel/CSV to JSON Viewer",
    description: "A Streamlit web application that converts BNI Chapter reports from Excel or CSV formats into clean, structured JSON.",
    detailedDescription: "This project is a Streamlit-based web application designed to transform BNI Chapter Reports into structured, machine-readable JSON. It supports both Chapter Roster Reports (Format A) and Chapter Summary PALMS Reports (Format B), handling multiple input formats including CSV, XLSX, and legacy XLS files.<br><br>The application automatically converts older XLS files to XLSX to ensure consistent parsing, then processes the data and displays a clean, pretty-printed JSON output. This tool simplifies data inspection, transformation, and downstream integration for reporting and analytics workflows.",
    tags: ["Streamlit", "Excel", "CSV", "JSON"],
    category: "Web App",
    imageUrl: projectImage12,
    videoUrl: "https://www.youtube.com/embed/V6_IgueArAI?si=iWmDV9j67irUgolS",
  }


];

const categories = ["All", "Web App","Desktop App", "Automation", "Data","DevOps"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold">Featured Projects</h2>
          <p className="text-muted-foreground text-xl font-light">
            Selected work showcasing automation, data, and security expertise
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? "bg-primary hover:bg-primary/90 shadow-glow"
                  : "border-border hover:bg-primary/90"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-1 md:gap-6 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.title}
              className="p-6 glass-effect hover:border-primary transition-all duration-300 group animate-scale-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Project placeholder image */}
              <div className="w-full lg:h-60 rounded-lg bg-gradient-card mb-4 flex items-center justify-center overflow-hidden group-hover:shadow-glow transition-shadow">
                <div className="text-4xl font-bold text-primary/20">
                  <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-[100%] h-[100%]"
                />
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-secondary/50 text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* View Details Button */}
              <Button
                size="sm"
                variant="default"
                className="w-full"
                onClick={() => setSelectedProject(project)}
              >
                <Eye className="w-4 h-4 mr-2" />
                View Details
              </Button>
            </Card>
          ))}
        </div>

        {/* Project Details Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-3xl font-bold mb-2">
                    {selectedProject.title}
                  </DialogTitle>
                  <DialogDescription className="text-base">
                    {selectedProject.description}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 mt-4">
                   {/* Video */}
                  <div className="aspect-video w-full rounded-lg overflow-hidden bg-muted">
                    
                    <iframe 
                            src={selectedProject.videoUrl} 
                            title={selectedProject.title} 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            className="w-full h-full"
                            referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen></iframe>

                  </div>
                  {/* Video */}
                  {/* <div className="w-full rounded-lg overflow-hidden bg-muted">
                    <video
                      className="w-full h-full object-cover"
                      loop
                      autoPlay
                      controls
                      preload="metadata"
                      controlsList="nodownload"
                    >
                      <source src={selectedProject.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div> */}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Detailed Description */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">About This Project</h3>
                    {selectedProject.detailedDescription.split('<br>').map((line, idx) => (
                      <p key={idx} className="text-muted-foreground leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
