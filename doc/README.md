# Methods

This document gives a step-by-step description of the methods that were
performed in programs that have a (point and click) graphical user
interface. Other analyses were performed in R, where the analyses are
more self-documenting in RMarkdown and are therefore not redundantly
described here.

## Cleaning the raw data

Performed in R, see
[../scripts/Data_cleanup.Rmd](../scripts/Data_cleanup.Rmd).

## Reviewing the half-clean data

Hardy-Weinberg Analysis and Structure analysis using programs
PGDSpider, Arlequin and STRUCTURE

1.  Cleaned up and reformatted the dataset in RStudio to a [CONVERT][1] file
    format (c.f. Data_cleanup script)
2.  Downloaded [PGDSpider][2] version 2.1.1.5 (May 2018)
3.  Opened PGDSpider and selected the following settings:
    1.  Data input file file format: CONVERT; select input file:
        `ratsSNPs_PGDSpyder_input.csv` (output from RStudio script
        stated above)
    2.  Data output file file format: ARLEQUIN; select output file:
    3.  Convert Select the type of the data: SNP; Apply
    4.  Convert
4.  Repeated the above steps again, except with data output file file
    format STRUCTURE

At this stage we have an Arlequin input file (.arp file format) and a
STRUCTURE input file (.str) generated from PGDSpider for use in the
Hardy-Weinberg Analysis and the STRUCTURE analysis.

1.  Downloaded [Arlequin][3] version 3.5.2.2 (released on 02.08.2015)
2.  Opened Arlequin application and applied the settings and procedures
    as follows:
    1.  File > Open project > File:
    2.  Settings > General settings > Polymorphism control Allowed
        missing level per site: 0.6
    3.  Settings > Hardy-Weinberg > Perform exact test of
        Hardy-Weinberg equilibrium: check mark
    4.  Start (then upon completion) View Results
3.  Copied the output from the html (or xml) to a text file and saved.

For STRUCTURE:

1.  Downloaded [STRUCTURE][4] version 2.3.4
2.  Running the analysis:
    1.  File > New project
    2.  Fill in settings: 
        1. Project name: ratsSNPs_struc_preHWE, Project Path: 
           kiore-project/results/STRUCTURE Data File:
           ratsSNPs_Structure_input_preHWE.str 
        2. Information of Input dataset: Number of Individuals: 379 Number of 
           Loci: 282 Ploidy: 2 Missing Data is Represented by: -9 
        3. Format of input dataset: Check row of data names (rest unckecked)
        4. Format of input dataset (cont'd): Check Individual ID for each 
           individual; Check Putative population origin for each individual (rest 
           unckecked)
    3.  Parameter set > New
    4.  Filled in settings: Burnin: 5,000; MCMC reps after Burnin: 50,000; Use 
        Admixture Model; Compute the Probability of the Data (for estimating K);
        Frequency of Metropolis update for Q: 10
    5.  Project > Start a Job > K = 2 to K = 25
3.  Zipped all the output in the results file into a zipped file
4.  Uploaded the zip file to
    http://taylor0.biology.ucla.edu/structureHarvester/#

## Creating a NeighborNet network

Using RStudio and SplitsTree

1.  Created a [Phylip][5] (.phy) file in R using
    NeighborNet_Treebuilding.Rmd
2.  Downloaded and installed [SplitsTree4][6]
3.  Opened the .phy file in SplitsTree, selected "protein" when prompted
    the data type (to allow for more symbols than just ATCG)
4.  Saved as NEXUS file
5.  Opened NEXUS file in text viewer, scrolled to line 382 "datatype =
    protein" and replaced protein with "dna", and then removed all lines
    after line 2239 "End CHARACTERS". Saved.
6.  Re-opened in SplitsTree. Under "Distances", selected HKY85 (which
    now works), and empirical frequencies.
7.  Exported the [NeighborNet][7] tree as an image and exported the
    distance matrix as a tab-delimited text file for use in Mantel test
    later.
8.  Opened the exported genetic distances text file and deleted the
    "distances as column vector" section at the bottom of the file, as
    well as the title.

#### Pairwise FST testing with cleaned data

1.  Opened PGDSpider and selected the following settings:
    1.  Data input file file format: CONVERT; select input file:
        ratsSNPs_PGDSpyder_input_CLEAN.csv (output from RStudio script
        FST_test.RMD)
    2.  Data output file file format: ARLEQUIN; select output file:
    3.  Convert Select the type of the data: SNP; Apply
    4.  Convert
2.  Opened Arlequin application and applied the settings and procedures
    as follows:
    1.  File > Open project > File:
    2.  Settings > General settings > Polymorphism control Allowed
        missing level per site: 0.6
    3.  Settings > Population comparisons > Compute pairwise FST:
        check mark (number of permutations 1000 and significance level
        0.05)
    4.  Start (then upon completion) View Results
3.  Copied the output from the html (or xml) to a text file and saved
    (fst_allresults.txt)

#### Conducting a Mantel Test

Using RStudio

#### Testing amount of Heterozygosity

Using RStudio

# References

[1]: https://doi.org/10.1111/j.1471-8286.2004.00597.x
[2]: https://doi.org/10.1093/bioinformatics/btr642
[3]: https://doi.org/10.1111/j.1755-0998.2010.02847.x
[4]: https://web.stanford.edu/group/pritchardlab/structure_software/release_versions/v2.3.4/html/structure.html
[5]: https://evolution.genetics.washington.edu/phylip.html
[6]: https://doi.org/10.1093/molbev/msj030
[7]: https://doi.org/10.1093/molbev/msh018
