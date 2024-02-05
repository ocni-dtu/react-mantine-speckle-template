import { Card, Group, Image, Text } from '@mantine/core'
import { Project } from '@queries'
import { Loading } from '../Loading'

interface StreamCardProps {
  project?: Pick<Project, 'id' | 'name' | 'description' | 'models'> | null
}

export const ProjectCard = (props: StreamCardProps) => {
  const { project } = props

  const previewUrl = project?.models.items[0].previewUrl

  if (!project) {
    return <Loading />
  }

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={previewUrl}
          height={160}
          alt={project.name}
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{project.name}</Text>
      </Group>

      <Text size="sm" c="dimmed">
        {project.description}
      </Text>
    </Card>
  )
}