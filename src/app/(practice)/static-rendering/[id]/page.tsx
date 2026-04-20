import Box from "@/components/Box"

export default async function DynamicRouteSegmentPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return <Box>ID: {id}</Box>
}
