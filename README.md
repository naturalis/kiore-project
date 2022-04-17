<<<<<<< HEAD
# kiore-project: Unravelling the Genomic Relationships between Populations of the Introduced Polynesian Rat, Rattus exulans
Repository for MSc Research Project, Biology, Leiden University
=======
# kiore-project
Repository for MSc Research Project, Biology, Leiden University, titled;
Unravelling the Genomic Relationships between Populations of the Introduced Polynesian Rat, Rattus exulans
>>>>>>> 9f470b3026c115e8baa8de2594a05d11b2fa0abd
Grace Saville
Understanding Evolution, Naturalis Biodiversity Center
20/09/2021 – 23/05/2022

<<<<<<< HEAD
## Repo Contents: 
(Proposal Abstract below)

**data:** this folder contains raw data files, cleaned data files, programme-specific formatting files and programme log files.
	- ratsSNPs_arl_input.res
	- SplitsTree_files
**results:**
=======
Contents: (Proposal Abstract below)

data: this folder contains raw data files, cleaned data files, programme-specific formatting files and programme log files.
	- ratsSNPs_arl_input.res
	- SplitsTree_files
results:
>>>>>>> 9f470b3026c115e8baa8de2594a05d11b2fa0abd
	- arlequin_results
	- ratsSNPs_struc_preHWE
	- structureHarvesterResults
	- distance matrices plots (before and after data clean-up)
	- NeighborNet plots generated in SplitsTree (before and after data clean-up)
<<<<<<< HEAD
**scripts:** this folder contains the scripts used to clean the data and run analyses. The clean-up steps involved removing rows and columns with high % missing values, file conversion in PGDSpider, a Hardy-Weinberg Equilibrium test in Arlequin, and a Structure analysis in STRUCTURE.
=======
scripts: this folder contains the scripts used to clean the data and run analyses. The clean-up steps involved removing rows and columns with high % missing values, file conversion in PGDSpider, a Hardy-Weinberg Equilibrium test in Arlequin, and a Structure analysis in STRUCTURE.
>>>>>>> 9f470b3026c115e8baa8de2594a05d11b2fa0abd
	- Data_cleanup.Rmd and .pdf: To make the raw data ready for analysis I...
		Removed SNP columns which had no variation (invariant/monomorphic)
		Removed SNP columns with more than 60% missing values
		Removed specimen rows with more than 56% missing values (leaving a dataset which was/is at least 90% complete)
		Prepped an input file for PGDSpider (a file conversion programme)
		Read the Arlequin Hardy-Weinburg Equilibrium (HWE) analysis output files
		Checked the HWE p-values and ran a Bonferroni test
		Removed samples with issues identified by the HWE analysis
		Double checked for monomorphic SNP columns
	- NeighborNet_Treebuilding.Rmd and .pdf: Created a file to open in SplitsTree, in order to generate a NeighborNet network and export a genetic distance matrix.
	- Mantel_test.Rmd and .pdf: Generated a geographical distance matrix of distances between all islands where Pacific rats were sampled. Loaded the genetic distance matrix produced in SplitsTree and then used both matrices to run a Mantel test.
	- Heterozygosity_test.Rmd and .pdf: 





<<<<<<< HEAD
## Abstract
**Background** 
Rattus exulans, known as kiore or the Polynesian rat, was introduced to islands across the Pacific by humans during the Austronesian expansion. I expect genetic differences will exist between the R. exulans populations because of assorted ecological pressures combined with successive founder effects and varying time periods since colonisation on each island. This research project aims to add to current research on the spread of the Polynesian rat throughout the Pacific by exploring how island evolutionary processes and aided dispersal by humans affected the rat genotype. 
**Methods**
This project will be guided by the questions “Which R. exulans island populations demonstrate the closest genetic relationships?”, “What is the correlation between the geographical distances of insular R. exulans populations and the genetic distances?”, and “How prevalent is increased homozygosity in Pacific R. exulans populations successively further from the mainland populations, and is inbreeding correlated with island size here?” The process of answering these questions will involve the construction of a NeighborNet haplotype network, comparing geographic island distances with pairwise genetic distances between populations, and heterozygosity testing respectively.
**Expected Results** 
=======
Abstract
Background 
Rattus exulans, known as kiore or the Polynesian rat, was introduced to islands across the Pacific by humans during the Austronesian expansion. I expect genetic differences will exist between the R. exulans populations because of assorted ecological pressures combined with successive founder effects and varying time periods since colonisation on each island. This research project aims to add to current research on the spread of the Polynesian rat throughout the Pacific by exploring how island evolutionary processes and aided dispersal by humans affected the rat genotype. 
Methods 
This project will be guided by the questions “Which R. exulans island populations demonstrate the closest genetic relationships?”, “What is the correlation between the geographical distances of insular R. exulans populations and the genetic distances?”, and “How prevalent is increased homozygosity in Pacific R. exulans populations successively further from the mainland populations, and is inbreeding correlated with island size here?” The process of answering these questions will involve the construction of a NeighborNet haplotype network, comparing geographic island distances with pairwise genetic distances between populations, and heterozygosity testing respectively.
Expected Results 
>>>>>>> 9f470b3026c115e8baa8de2594a05d11b2fa0abd
It is expected that R. exulans populations from neighbouring islands and islands humans colonised closely in time will exhibit the least genetic differences and therefore be close to each other on the haplotype network and have shorter mean genetic distances between them. However, it is also expected that outliers will exist where there was increased or decreased movement between islands by humans and therefore rats. Homozygosity within each population is expected to increase the further away the colonised island is from the mainland Polynesian rat population in southeast Asia. The future results of this project will aid in clarifying the relationships between R. exulans populations and the order of colonisation. They may be used as a proxy for the sequence of human settlement, improve understanding of evolutionary processes and allow the Polynesian rat to be used as a model for human aided dispersal.
