import { TSVFileReader } from '../../shared/libs/file-reader/tsv-file-reader.js';
import { Command } from './command.interface.js';

export class ImportCommand implements Command {
  public getName(): string {
    return '--import';
  }

  public execute(...parameters: string[]): void {
    const [fileName] = parameters;
    const FileReader = new TSVFileReader(fileName.trim());

    try {
      FileReader.read();
      console.log(FileReader.toArray());
    } catch (err) {
      if (!(err instanceof Error)) {
        throw err;
      }

      console.error(`Can't import data from file: ${fileName}`);
      console.log(`Details: ${err.message}`);
    }
  }
}
