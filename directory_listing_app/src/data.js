export const data = [
    {
      name: 'Directory A',
      type: 'directory',
      children: [
        {
          name: 'Subdirectory A1',
          type: 'directory',
          children: [
            { name: 'File A1-1', type: 'file' },
            { name: 'File A1-2', type: 'file' },
          ],
        },
        { name: 'File A2', type: 'file' },
      ],
    },
    {
      name: 'Directory B',
      type: 'directory',
      children: [
        { name: 'File B1', type: 'file' },
        {
          name: 'Subdirectory B1',
          type: 'directory',
          children: [
            { name: 'File B1-1', type: 'file' },
            { name: 'File B1-2', type: 'file' },
          ],
        },
      ],
    },
  ];
  