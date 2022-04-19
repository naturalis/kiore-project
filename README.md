## Unravelling the Genomic Relationships between Populations of the Introduced Polynesian Rat, Rattus exulans
Repository for MSc Research Project, Biology, Leiden University  
Grace Saville  
Understanding Evolution, Naturalis Biodiversity Center  
20/09/2021 – 23/05/2022  

### Repo Contents: 
Files are generally sorted by promgram (e.g. Arlequin) or method (e.g. Mantel test). 

#### data:
This folder contains raw data files, cleaned data files, program-specific formatting files and programme log files.

1. Arlequin
	- ratsSNPs_arl_input.arp
2. PGDSpider
	- PGDSpider_log.spid
	- ratsSNPs_PGDSpider_input.txt
3. RStudio
	- ratsSNPs_halfclean.csv
	- ratsSNPs_clean.csv
4. Raw_data
	- Genotyping-007.010-01_SNP_Raw_data.tsv                         
	- island_size_data.csv                                            
5. SplitsTree
	- geneticdist_splitstree_output.txt                    
	- geneticdist_SplitsTree_output_taxa_only.txt          
	- geneticdist_SplitsTree_output_taxa_only_UNCLEANED.txt
	- geneticdist_SplitsTree_output_UNCLEANED.txt          
	- ratsSNPs_SplitsTree_input.phy                       
	- ratsSNPs_SplitsTree_input.phy.nex                   
	- ratsSNPs_SplitsTree_input_UNCLEANED.phy             
	- ratsSNPs_SplitsTree_input_UNCLEANED.phy.nex
6. STRUCTURE 
	- ratsSNPs_Structure_input_preHWE

#### results:

1. Arlequin_HardyWeiberg
	- Arlequin_log.txt
	- hwe_allresults_14032022.txt      
	- hwe_results_by_island_14032022
	- HWEanalysis_allresults_tidy.csv  
	- pairwise_fst_results_28032022.txt
	- ratsSNPs_arl_input.js            
	- ratsSNPs_arl_input.xml
	- ratsSNPs_arl_input_main.htm      
	- ratsSNPs_arl_input_tree.htm
2. RStudio_Heterozygosity
	- heterozygosity_testing_results_table.csv
3. RStudio_Mantel_Test_&_Distances
	- distance_matrices_plot.png                         
	- distance_matrices_plot_PRECLEANUP.jpg              
	- distance_matrices_quantilelines_plot.png           
	- distance_matrices_quantilelines_plot_PRECLEANUP.jpg
4. SplitsTree_NeighborNet
	- NeighborNet_clean_broad.png
	- NeighborNet_clean_detailled.png
	- NeighborNet_PRECLEANUP.png
5. STRUCTURE
	- as_pdf
		- mainparams and extraparams
		- PlotData
		- Results
		- Results_compressed.zip
	- project_data
	- ratsSNPs_struc_preHWE.spj
6. StructureHarvester
	- deltaK.eps, .pdf and .png
	- evannoTable.tab
	- Kn.indfile and .popfile   
	- lnPK.eps, .pdf and .png      
	- lnPPK.eps, .pdf and .png
	- meanLnProb.eps, .pdf and .png 
	- rawSummary.tab
	- summary.html

#### scripts:
This folder contains the R scripts (and pdf versions) used to clean the data and run analyses. The clean-up steps involved removing rows and columns with high % missing values, file conversion in PGDSpider, a Hardy-Weinberg Equilibrium test in Arlequin, and a Structure analysis in STRUCTURE.

1. Data_cleanup.Rmd and .pdf: To make the raw data ready for analysis I...  
	- Removed SNP columns which had no variation (invariant/monomorphic)  
	- Removed SNP columns with more than 60% missing values  
	- Removed specimen rows with more than 56% missing values (leaving a dataset which was/is at least 90% complete)  
	- Prepped an input file for PGDSpider (a file conversion programme)  
	- Read the Arlequin Hardy-Weinburg Equilibrium (HWE) analysis output files  
	- Checked the HWE p-values and ran a Bonferroni test  
	- Removed samples with issues identified by the HWE analysis  
	- Double checked for monomorphic SNP columns  
2. NeighborNet_Treebuilding.Rmd and .pdf: Created a file to open in SplitsTree, in order to generate a NeighborNet network and export a genetic distance matrix.
3. Mantel_test.Rmd and .pdf: Generated a geographical distance matrix of distances between all islands where Pacific rats were sampled. Loaded the genetic distance matrix produced in SplitsTree and then used both matrices to run a Mantel test.
4. Heterozygosity_test.Rmd and .pdf: 

____


### Abstract
**Background**   
Rattus exulans, known as kiore or the Polynesian rat, was introduced to islands across the Pacific by humans during the Austronesian expansion. I expect genetic differences will exist between the R. exulans populations because of assorted ecological pressures combined with successive founder effects and varying time periods since colonisation on each island. This research project aims to add to current research on the spread of the Polynesian rat throughout the Pacific by exploring how island evolutionary processes and aided dispersal by humans affected the rat genotype.  
**Methods**   
This project will be guided by the questions “Which R. exulans island populations demonstrate the closest genetic relationships?”, “What is the correlation between the geographical distances of insular R. exulans populations and the genetic distances?”, and “How prevalent is increased homozygosity in Pacific R. exulans populations successively further from the mainland populations, and is inbreeding correlated with island size here?” The process of answering these questions will involve the construction of a NeighborNet haplotype network, comparing geographic island distances with pairwise genetic distances between populations, and heterozygosity testing respectively.  
**Expected Results**  
It is expected that R. exulans populations from neighbouring islands and islands humans colonised closely in time will exhibit the least genetic differences and therefore be close to each other on the haplotype network and have shorter mean genetic distances between them. However, it is also expected that outliers will exist where there was increased or decreased movement between islands by humans and therefore rats. Homozygosity within each population is expected to increase the further away the colonised island is from the mainland Polynesian rat population in southeast Asia. The future results of this project will aid in clarifying the relationships between R. exulans populations and the order of colonisation. They may be used as a proxy for the sequence of human settlement, improve understanding of evolutionary processes and allow the Polynesian rat to be used as a model for human aided dispersal.  

____

### Summary of Methods  

Method for NeighborNet network in SplitsTree

1. I created a Phylip (.phy) file in R using the "NeighborNet_Teebuilding" script on the kiore-project Git Repository.
	References: Felsenstein, J. (2005). PHYLIP (Phylogeny Inference Package) (3.6). Distributed by the author. https://evolution.genetics.washington.edu/phylip.html
2. I downloaded and installed SplitsTree4
	Reference: Huson, D. H., & Bryant, D. (2006). Application of Phylogenetic Networks in Evolutionary Studies. Molecular Biology and Evolution, 23(2), 254–267. https://doi.org/10.1093/molbev/msj030
2. Opened the .phy file in SplitsTree, selected "protein" when promted the data type (to allow for more symbols than just ATCG)
3. Saved as .nex file
	Reference: Maddison DR, Swofford DL, and Maddison WP (1997). NEXUS: An extensible file format for systematic information. Syst Biol 46:590-621
4. Opened .nex file in text viewer, scrolled to line 382 "datatype = protein" and replaced protein with "dna", and then removed all lines after line 2239 "End CHARACTERS". Saved.
5. Re-opened in SplitsTree. Under "Distances", selected HKY85 (which now works), and empirical frequencies.
6. Exported the NeighborNet tree as an image and exported the distance matrix as a tab-delimited text file for use in Mantel test later.
	Reference: Bryant, D., & Moulton, V. (2004). Neighbor-Net: An Agglomerative Method for the Construction of Phylogenetic Networks. Molecular Biology and Evolution, 21(2), 255–265. https://doi.org/10.1093/molbev/msh018
7. Opened the exported genetic distances text file and deleted the "distances as column vector" section at the bottom of the file, as well as the title.


Method for Hardy-Weinberg Analysis and Structure analysis using programs PGDSpider, Arlequin and STRUCTURE

1. I Cleaned up and reformatted the dataset in RStudio to a CONVERT file format (c.f. Data_cleanup script kiore-project repository)
	Reference: Glaubitz J.C. (2004) CONVERT: A user-friendly program to reformat diploid genotypic data for commonly used population genetic software packages. Molecular Ecology Notes 4: 309-310.
2. Downloaded PGDSpider version 2.1.1.5 (May 2018)
	Reference: Lischer HEL and Excoffier L (2012) PGDSpider: An automated data conversion tool for connecting population genetics and genomics programs. Bioinformatics 28: 298-299.
3. Opened PGDSpider and selected the following settings:
	a. Data input file file format: CONVERT; select input file: ratsSNPs_PGDSpyder_input.csv (output from RStudio script stated above)
	b. Data output file file format: ARLEQUIN; select output file: 
	c. Convert Select the type of the data: SNP; Apply
	d. Convert
4. Repeated the above steps again, except: 
	a. Data output file file format: STRUCTURE; select output file:
	b.

At this stage I had an Arlequin input file (.arp file format) and a STRUCTURE input file (.str) generated from PGDSpider for use in the Hardy-Weinberg Analysis and the STRUCTURE analysis. Both are on the kiore_project repository.

5. I downloaded Arlequin version 3.5.2.2 (released on 02.08.2015)
	Reference: Excoffier, L. and H.E. L. Lischer (2010) Arlequin suite ver 3.5: A new series of programs to perform population genetics analyses under Linux and Windows. Molecular Ecology Resources. 10: 564-567.
6. Opened Arlequin application and applied the settings and procedures as follows:
	a. File -> Open project -> File: 
	b. Settings -> General settings -> Polymorhism control Allowed missing level per site: 0.6
	c. Settings -> Hardy-Weinberg -> Perform exact test of Hardy-Weinberg equilibrium: check mark
	d. Start (then upon completion) View Results
7. Copied the output from the html (or xml) to a text file and saved.

Structure...
	Reference:


____
